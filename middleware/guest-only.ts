export default defineNuxtRouteMiddleware(() => {
  if (process.server) return navigateTo('/');
  return abortNavigation();
  // }
});
