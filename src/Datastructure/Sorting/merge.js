import("./math").then((math) => {
  console.log(math.add(16, 26));
});

const OtherComponent = React.lazy(() => import("./OtherComponent"));
