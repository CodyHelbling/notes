/**
 "question": "What is React?",
 "answer": "A declarative, component-based, DOM management UI framework."
 */

/**
 "question": "List the basic parts to a React component.",
 "answer": "
 - A class extending React.Component
 - A render function
 - Markup for the function to render with optional variable interpolation.
 "
 */

/**
 "question": "What is JSX? Why use it?",
 "answer": "JSX melds markup and JS logic. It's used to separate concerns into
 logical components, rather than technology. Rendering logic is inherently
 coupled with UI logic so it doesn't add benefit to separate them."
 */

/**
 "question": What are elements in React?",
 "answer": "The smallest building blocks of React apps.
 They are used to build React components."
 */

/**
 "question": "How do you render an element to the DOM?",
 "answer": "Pass a react element, and root DOM node to ReactDOM.render()."
 */

/**
 "question": "How does React update the DOM?"
 "answer": "React DOM compares the element and its children to the previous
 one, and only applies the DOM updates necessary to bring the DOM to the
 desired state.
 */

// Left off here.
// TODO: https://reactjs.org/docs/components-and-props.html

/**
 "question": "Create a simple component utilizing interpolation.",
 "answer":
 */

class HelloMessage extends React.Component {
    render() {
        return (
            <div>
                Hello {this.props.name}
            </div>
        );
    }
}

ReactDOM.render(
    <HelloMessage name="Taylor" />,
    mountNode
);

/**
 "question": "Create a simple with props and state.",
 "answer":
 */

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { seconds: 0 };
    }

    tick() {
        this.setState(state => ({
            seconds: state.seconds + 1
        }));
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div>
                Seconds: {this.state.seconds}
            </div>
        );
    }
}

ReactDOM.render(<Timer />, mountNode);

/**
 "question": "Why put `super(props)` in the constructor?"
 "answer":
 "Super is used to access and call functions of an object's parent. With React,
 props are used to pass properties down through components. super(props) allows
 users to access the props of parent object.

 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super
 https://stackoverflow.com/questions/41837992/what-is-superprops-doing-for-my-react-component/41838191
 "
 */