/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface Timer {
	raw: number;
	pausedTime: number | null;
	results: number[];
	completeCount: number;
	state: 'Finished' | 'Running' | 'Stopped';
}
