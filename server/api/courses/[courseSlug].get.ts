import { getCourseDetails } from '~/server/models/course';

export default defineEventHandler((event) => {
  const courseSlug = getRouterParam(event, 'courseSlug') as string;
  const courseDetails = getCourseDetails(courseSlug);

  if (!courseDetails) {
    throw createError({
      statusCode: 500,
      statusMessage: 'server Error',
    });
  }

  return courseDetails;
});
