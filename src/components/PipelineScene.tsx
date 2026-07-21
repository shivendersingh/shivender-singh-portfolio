import { useRef, useMemo } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

// Pipeline node positions along a curved path
const PIPELINE_STAGES = [
  { label: 'Requirements', x: -3.6, y: 0.4,  z: 0,    state: 'passed' as const  },
  { label: 'Test Design',  x: -2.2, y: -0.3, z: 0.2,  state: 'passed' as const  },
  { label: 'Automation',   x: -0.6, y: 0.5,  z: -0.1, state: 'active' as const  },
  { label: 'CI/CD',        x: 0.8,  y: -0.2, z: 0.3,  state: 'active' as const  },
  { label: 'QA Signals',   x: 2.2,  y: 0.4,  z: -0.2, state: 'attention' as const },
  { label: 'Release',      x: 3.6,  y: -0.1, z: 0.1,  state: 'passed' as const  },
]

const STATE_COLORS = {
  passed:    new THREE.Color('#a3e635'),
  active:    new THREE.Color('#22d3ee'),
  attention: new THREE.Color('#f59e0b'),
}

function PipelineNode({ position, state, index }: {
  position: [number, number, number]
  state: 'passed' | 'active' | 'attention'
  index: number
}) {
  const meshRef = useRef<THREE.Mesh>(null)
  const color = STATE_COLORS[state]

  useFrame(({ clock }) => {
    if (!meshRef.current) return
    const t = clock.getElapsedTime()
    // Gentle breathing pulse
    const scale = 1 + Math.sin(t * 1.2 + index * 1.1) * 0.06
    meshRef.current.scale.setScalar(scale)
  })

  return (
    <group position={position}>
      {/* Core sphere */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[0.14, 16, 16]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.6}
          roughness={0.2}
          metalness={0.4}
        />
      </mesh>
      {/* Outer ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.22, 0.015, 8, 32]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.3}
          transparent
          opacity={0.5}
        />
      </mesh>
    </group>
  )
}

function PipelineEdge({ from, to }: {
  from: [number, number, number]
  to: [number, number, number]
}) {
  const points = useMemo(() => {
    const mid: [number, number, number] = [
      (from[0] + to[0]) / 2,
      (from[1] + to[1]) / 2 + 0.1,
      (from[2] + to[2]) / 2,
    ]
    return [
      new THREE.Vector3(...from),
      new THREE.Vector3(...mid),
      new THREE.Vector3(...to),
    ]
  }, [from, to])

  const curve = useMemo(() => new THREE.QuadraticBezierCurve3(...(points as [THREE.Vector3, THREE.Vector3, THREE.Vector3])), [points])
  const tubePoints = useMemo(() => curve.getPoints(30), [curve])
  const geometry = useMemo(() => {
    const g = new THREE.BufferGeometry().setFromPoints(tubePoints)
    return g
  }, [tubePoints])

  return (
    <primitive object={new THREE.Line(geometry, new THREE.LineBasicMaterial({ color: '#1a3a40', transparent: true, opacity: 0.6 }))} />
  )
}

function SignalParticle({ from, to, offset }: {
  from: [number, number, number]
  to: [number, number, number]
  offset: number
}) {
  const meshRef = useRef<THREE.Mesh>(null)
  const curve = useMemo(() => {
    const mid = new THREE.Vector3(
      (from[0] + to[0]) / 2,
      (from[1] + to[1]) / 2 + 0.1,
      (from[2] + to[2]) / 2,
    )
    return new THREE.QuadraticBezierCurve3(
      new THREE.Vector3(...from),
      mid,
      new THREE.Vector3(...to),
    )
  }, [from, to])

  useFrame(({ clock }) => {
    if (!meshRef.current) return
    const t = ((clock.getElapsedTime() * 0.22 + offset) % 1)
    const pos = curve.getPoint(t)
    meshRef.current.position.copy(pos)
  })

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[0.05, 8, 8]} />
      <meshStandardMaterial
        color="#22d3ee"
        emissive="#22d3ee"
        emissiveIntensity={1.2}
        transparent
        opacity={0.85}
      />
    </mesh>
  )
}

function FloatingParticles() {
  const count = 60
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      arr[i * 3]     = (Math.random() - 0.5) * 9
      arr[i * 3 + 1] = (Math.random() - 0.5) * 3.5
      arr[i * 3 + 2] = (Math.random() - 0.5) * 3
    }
    return arr
  }, [])

  const meshRef = useRef<THREE.Points>(null)
  useFrame(({ clock }) => {
    if (!meshRef.current) return
    meshRef.current.rotation.y = clock.getElapsedTime() * 0.015
  })

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#22d3ee" size={0.03} transparent opacity={0.25} sizeAttenuation />
    </points>
  )
}

export default function PipelineScene() {
  const groupRef = useRef<THREE.Group>(null)
  const { pointer } = useThree()

  useFrame(() => {
    if (!groupRef.current) return
    // Restrained pointer parallax
    groupRef.current.rotation.y += (pointer.x * 0.08 - groupRef.current.rotation.y) * 0.04
    groupRef.current.rotation.x += (-pointer.y * 0.04 - groupRef.current.rotation.x) * 0.04
  })

  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[0, 4, 2]} intensity={0.8} color="#22d3ee" />
      <pointLight position={[-4, -2, 1]} intensity={0.4} color="#a3e635" />
      <pointLight position={[4, 2, -1]} intensity={0.3} color="#f59e0b" />

      <group ref={groupRef} position={[0, 0, 0]}>
        <FloatingParticles />

        {/* Edges between consecutive nodes */}
        {PIPELINE_STAGES.slice(0, -1).map((stage, i) => (
          <PipelineEdge
            key={`edge-${i}`}
            from={[stage.x, stage.y, stage.z]}
            to={[PIPELINE_STAGES[i + 1].x, PIPELINE_STAGES[i + 1].y, PIPELINE_STAGES[i + 1].z]}
          />
        ))}

        {/* Signal particles travelling between nodes */}
        {PIPELINE_STAGES.slice(0, -1).map((stage, i) => (
          <SignalParticle
            key={`signal-${i}`}
            from={[stage.x, stage.y, stage.z]}
            to={[PIPELINE_STAGES[i + 1].x, PIPELINE_STAGES[i + 1].y, PIPELINE_STAGES[i + 1].z]}
            offset={i / PIPELINE_STAGES.length}
          />
        ))}

        {/* Nodes */}
        {PIPELINE_STAGES.map((stage, i) => (
          <PipelineNode
            key={stage.label}
            position={[stage.x, stage.y, stage.z]}
            state={stage.state}
            index={i}
          />
        ))}
      </group>
    </>
  )
}
