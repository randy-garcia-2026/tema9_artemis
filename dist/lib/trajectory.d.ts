/**
 * Artemis II free-return trajectory generator.
 * Produces a smooth, visually convincing figure-8 path around Earth and Moon.
 * Units: 1 unit = 1000 km. Earth at origin (0,0,0). Moon at ~(384, 0, 0) at T+0.
 */
import { TrajectoryPoint } from '../types.js';
import { EARTH_RADIUS_UNITS, MOON_RADIUS_UNITS, EARTH_MOON_DISTANCE, TOTAL_MISSION_SECONDS } from './orbital-math.js';
/**
 * Generate smooth trajectory using Catmull-Rom splines through waypoints
 */
export declare function generateTrajectory(numPoints?: number): TrajectoryPoint[];
/**
 * Interpolate a trajectory point at a given MET (seconds)
 */
export declare function getTrajectoryAtMET(trajectory: TrajectoryPoint[], targetMET: number): TrajectoryPoint;
export { EARTH_RADIUS_UNITS, MOON_RADIUS_UNITS, EARTH_MOON_DISTANCE, TOTAL_MISSION_SECONDS, };
//# sourceMappingURL=trajectory.d.ts.map