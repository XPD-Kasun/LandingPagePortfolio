import React from "react";

export default class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean }> {

       constructor(props) {
              super(props);
              this.state = { hasError: false };
       }

       static getDerivedStateFromError(error) {

              return { hasError: true, error };
       }

       componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
              console.log(error, errorInfo);
       }

       render() {
              if (this.state.hasError) {
                     console.log(this.state)
                     return <div>Error</div>
              }
              return this.props.children;
       }


}