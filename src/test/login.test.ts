import { describe, expect, it } from "vitest";
import { checkAccess } from "@/routes/index";
describe("login", () => {
  it("accepts miko / sorvetedechocolate ignoring case", () => expect(checkAccess("MiKo", "SorveteDeChocolate")).toBe(true));
  it("accepts spaces typed before or after", () => expect(checkAccess(" miko ", " sorvetedechocolate ")).toBe(true));
  it("rejects wrong password", () => expect(checkAccess("miko", "sorvete")).toBe(false));
});
