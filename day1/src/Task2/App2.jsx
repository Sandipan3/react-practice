export function CourseGoal(props) {
  return (
    <li>
      <h2>{props.title}</h2>
      <p>{props.desc}</p>
    </li>
  );
}

function App() {
  return (
    <div id="app" data-testid="app">
      <h1>Time to Practice</h1>
      <p>One course, many goals! 🎯</p>
      <ul>
        <CourseGoal title='Learn React' desc='In-depth' />
      </ul>
    </div>
  );
}

export default App;

// {/* OUTPUT AT LEAST TWO CourseGoal components here */}
// {/* One of them should have a title of “Learn React” and a description of “In-depth” */}