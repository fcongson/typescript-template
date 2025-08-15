const { main } = require("./index");

describe("main function", () => {
  let consoleSpy;

  beforeEach(() => {
    // Spy on console.log to capture its calls
    consoleSpy = jest.spyOn(console, "log").mockImplementation();
  });

  afterEach(() => {
    // Restore console.log after each test
    consoleSpy.mockRestore();
  });

  test("should log rocket emoji", () => {
    main();
    expect(consoleSpy).toHaveBeenCalledWith("🚀");
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });
});
