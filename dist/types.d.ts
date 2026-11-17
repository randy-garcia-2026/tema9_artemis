export interface TrajectoryPoint {
    met: number;
    x: number;
    y: number;
    z: number;
    dist_earth: number;
    dist_moon: number;
    velocity: number;
    phase: string;
}
export interface MissionEvent {
    id: string;
    title: string;
    met: number;
    metFormatted: string;
    description: string;
    phase: string;
    icon: string;
}
export interface CrewMember {
    name: string;
    role: string;
    agency: string;
    bio: string;
}
export interface TelemetrySnapshot {
    met: number;
    metFormatted: string;
    dist_earth: number;
    dist_moon: number;
    velocity: number;
    phase: string;
    x: number;
    y: number;
    z: number;
}
export interface MoonPosition {
    x: number;
    y: number;
    z: number;
}
//# sourceMappingURL=types.d.ts.map