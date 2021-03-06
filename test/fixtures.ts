// mix credo [fileName]
const noOptions = `Checking 1 source file ...

  Code Readability
┃
┃ [R] → Functions should have a @spec type specification.
┃       lib/rumbl.ex:27:7 (Rumbl.config_change)
┃ [R] → Functions should have a @spec type specification.
┃       lib/rumbl.ex:6:7 (Rumbl.start)
┃ [R] → Modules should have a @moduledoc tag.
┃       lib/rumbl.ex:1:11 (Rumbl)

Please report incorrect results: https://github.com/rrrene/credo/issues

Analysis took 0.1 seconds (0.01s to load, 0.1s running checks)
3 mods/funs, found 3 code readability issues.

Showing priority issues: ↑ ↗ →  (use \`--strict\` to show all issues, \`--help\` for options).
`;

// mix credo list [fileName]
const exampleListOutput = `

Checking 1 source file ...

  Rumbl
┃
┃ [R] → Modules should have a @moduledoc tag.
┃       lib/rumbl.ex:1:11 (Rumbl)
┃
┃       defmodule Rumbl do
┃                 ^^^^^
┃
┃ [R] → Functions should have a @spec type specification.
┃       lib/rumbl.ex:6:7 (Rumbl.start)
┃
┃         def start(_type, _args) do
┃           ^^^^^
┃
┃ [R] → Functions should have a @spec type specification.
┃       lib/rumbl.ex:27:7 (Rumbl.config_change)
┃
┃         def config_change(changed, _new, removed) do
┃           ^^^^^^^^^^^^^
┃

Please report incorrect results: https://github.com/rrrene/credo/issues

Analysis took 0.1 seconds (0.00s to load, 0.1s running checks)
3 mods/funs, found 3 code readability issues.

Showing priority issues: ↑ ↗ →  (use \`--strict\` to show all issues, \`--help\` for options).
`;
// mix credo list --format=oneline [fileName]
const exampleListFormatOneline = `
[R] → lib/rumbl.ex:1:11 Modules should have a @moduledoc tag.
[R] → lib/rumbl.ex:6:7 Functions should have a @spec type specification.
[R] → lib/rumbl.ex:27:7 Functions should have a @spec type specification.
[D] ↓ apps/persona/test/support/model_case.ex:62:40 Nested modules could be aliased at the top of the invoking module.
[F] → apps/persona/test/support/model_case.ex:62 Pipe chain should start with a raw value.
[R] ↓ apps/persona/test/test_helper.exs:5 There should be no more than 1 consecutive blank lines.
`;
const testTree: any = [
  {
    expected: {
      check: "W",
      column: 7,
      message: "Functions should have a @spec type specification.",
      position: 27,
    },
    line: "[W] → lib/rumbl.ex:27:7 Functions should have a @spec type specification.",
  },
  {
    expected: {
      check: "Y",
      column: 11,
      message: "Modules should have a @moduledoc tag.",
      position: 1,
    },
    line: "[Y] → lib/rumbl.ex:1:11 Modules should have a @moduledoc tag.",
  },
  {
    expected: {
      check: "X",
      column: 10001,
      message: "Functions should have a @spec type specification.",
      position: 6,
    },
    line: "[X] → lib/rumbl.ex:6:10001 Functions should have a @spec type specification.",
  },
  {
    expected: {
      check: "D",
      column: 40,
      message: "Nested modules could be aliased",
      position: 62,
    },
    line: "[D] ↓ apps/persona/test/support/model_case.ex:62:40 Nested modules could be aliased",
  },
  {
    expected: {
      check: "F",
      column: undefined,
      message: "Pipe chain should start with a raw value.",
      position: 62,
    },
    line: "[F] → apps/persona/test/support/model_case.ex:62 Pipe chain should start with a raw value.",
  },
];
export let output = {
  list: exampleListOutput,
  listOneline: exampleListFormatOneline,
  noOptions,
  testTree,
};
