import { isEvmAddress } from './index';

test("'' is not an address", () => {
    expect(isEvmAddress("")).toBe(false);
});

test("0x0 not is an address", () => {
    expect(isEvmAddress("0x0")).toBe(false);
});

test("0x9C3D7AB444055Dcd652Ff418C0F12032F72Edb0e is an address", () => {
    expect(isEvmAddress("0x9C3D7AB444055Dcd652Ff418C0F12032F72Edb0e")).toBe("0x9C3D7AB444055Dcd652Ff418C0F12032F72Edb0e");
});

