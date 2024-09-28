import type { Course } from "./course";

export { };


declare global{
  type Maybe<Course> = Course|null|undefined
}