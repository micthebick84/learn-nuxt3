import type { Course } from "./course";

export { };


declare global{
  type Maybe<T> = Course|null|undefined
}