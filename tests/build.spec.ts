import * as shell from 'shelljs';
import { describe, it, expect } from 'vitest';

describe('Build', () => {
    it('should complete successfully', () => {
        const output = shell.exec('ts-node tests/build.ts');

        expect(output.stderr).toBeFalsy();
        expect(output.code).toEqual(0);
    });
});
