// Exclude , Extract , NonNullable works only union type

type Events = "onchange" | "click" | "hover";
type Events2 = Exclude<Events, "onchange">;
type Events3 = Extract<Events, "onchange">;
type Events4 = NonNullable<number | string | null | undefined>;

const events1: Events2 = "hover";
const events2: Events3 = "onchange";
const events3: Events4 = 12;
