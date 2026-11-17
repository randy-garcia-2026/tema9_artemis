/**
 * Orbital math utilities for Artemis II Mission Tracker.
 * Units: 1 unit = 1000 km, time in seconds.
 */
export declare const EARTH_RADIUS_UNITS = 6.371;
export declare const MOON_RADIUS_UNITS = 1.7374;
export declare const EARTH_MOON_DISTANCE = 384.4;
export declare const TOTAL_MISSION_SECONDS = 803400;
/**
 * Convert Mission Elapsed Time (seconds) to formatted string DDD:HH:MM:SS
 */
export declare function formatMET(seconds: number): string;
/**
 * Parse MET string "DDD:HH:MM:SS" to seconds
 */
export declare function parseMET(met: string): number;
/**
 * Distance between two 3D points in 1000 km units
 */
export declare function distance3D(ax: number, ay: number, az: number, bx: number, by: number, bz: number): number;
/**
 * Cubic Hermite spline interpolation between two points with tangents
 */
export declare function hermiteInterp(p0: number[], p1: number[], m0: number[], m1: number[], t: number): number[];
/**
 * Catmull-Rom spline segment interpolation (uses 4 control points)
 * Returns a point along the segment between p1 and p2
 */
export declare function catmullRom(p0: number[], p1: number[], p2: number[], p3: number[], t: number): number[];
/**
 * Linear interpolation between two values
 */
export declare function lerp(a: number, b: number, t: number): number;
/**
 * Find the index in a sorted array closest to a value (binary search)
 */
export declare function findClosestIndex(arr: number[], value: number): number;
/**
 * Interpolate trajectory point at given MET using nearby points
 */
export declare function interpolateAtMET(mets: number[], xs: number[], ys: number[], zs: number[], targetMET: number): {
    x: number;
    y: number;
    z: number;
};
/**
 * Get Moon position at a given MET.
 * Moon orbits Earth with a period of ~27.3 days.
 * At T+0, Moon is positioned at angle 0 (along +X axis).
 */
export declare function moonPositionAtMET(met: number): {
    x: number;
    y: number;
    z: number;
};
/**
 * Determine mission phase from MET in seconds.
 * Key event METs (seconds):
 *   TLI: 7020  |  Lunar SOI entry: 412620  |  LOS: 499440
 *   Closest approach: 500520  |  AOS: 501900  |  SM Sep: 799200
 *   Reentry: 801000  |  Splashdown: 803400
 */
export declare function getMissionPhase(met: number): string;
//# sourceMappingURL=orbital-math.d.ts.map