import { describe, expect, test } from "vitest";

import type { Outcome } from "../../src/index.ts";

function useOutcome(isSuccess: boolean): Outcome<string> {
	if (!isSuccess) return [null, new Error("failed!")];

	return ["success", null];
}

describe("Outcome type", () => {
	test("should return data", () => {
		const [data, err] = useOutcome(true);

		expect(data).toBe("success");
		expect(err).toBeNull();
	});

	test("should return error", () => {
		const [data, err] = useOutcome(false);

		expect(data).toBeNull();
		expect(err).not.toBeNull();
		expect(err).toBeInstanceOf(Error);
	});

	test("should override default error return type", () => {
		const [data, err] = (function (): Outcome<boolean, string> {
			return [null, "Ohh no, failure!"];
		})();

		expect(data).toBeNull();
		expect(err).not.toBeNull();
		expect(err).not.toBeInstanceOf(Error);
		expect(err).toBe("Ohh no, failure!");
	});
});
