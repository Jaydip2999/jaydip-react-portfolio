import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  render() {
    if (this.state.error) {
      return (
        <div style={{ padding: "24px", fontFamily: "system-ui, sans-serif", color: "#111" }}>
          <h1 style={{ marginTop: 0 }}>App Render Error</h1>
          <p>A runtime error occurred. Share this message and I will fix it immediately.</p>
          <pre style={{ whiteSpace: "pre-wrap", background: "#f4f4f5", padding: "12px", borderRadius: "8px" }}>
            {String(this.state.error?.message || this.state.error)}
          </pre>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
