import { describe, test, expect, afterEach, vi } from "vitest";

import { greet } from "../src/index.ts";

describe("greet", () => {
	afterEach(() => {
		vi.restoreAllMocks();
	});

	test("should call console.log with the message", () => {
		const consoleSpy = vi.spyOn(console, "log").mockImplementation(() => {});

		greet("hello there");

		expect(consoleSpy).toHaveBeenCalledOnce();
		expect(consoleSpy).toHaveBeenCalledWith("hello there");
	});
});
