export default defineNuxtRouteMiddleware((to, from) => {
  const store = useUserStore();
  if (!store.isLoggedIn) {
    // return abortNavigation("You are not allowed to visit admin page");
    return navigateTo({ path: "/login" });
  }
});
