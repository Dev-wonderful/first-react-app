import React, { Component } from 'react';
import '../bootstrap.css';

class Counter extends Component {
    state = {
        counterValue: this.props.counter.value,
        tags: ['tag1', 'tag2', 'tag3']
        
    };

    //constructor() {
      //  super();
        //this.handleIncrement = this.handleIncrement.bind(this);
    //}

    renderTags() {
        if (this.state.tags.length === 0) return <p>There are no tags!</p>;

        return <ul>{ this.state.tags.map(tag => <li key={tag}>{ tag }</li>) }</ul>
    }

    handleIncrement = (product) => {
        this.setState({ counterValue: this.state.counterValue + 1});
        console.log(product)
    }


    
    render() { 
        console.log('props', this.props)

        return (
            <div>
                <span className={ this.getBadgeClasses() }>{ this.formatCount() }</span>

                <button onClick={ () => this.handleIncrement({id:1}) } className="btn btn-secondary btn-sm m-2">Increment</button>

                <button className="btn btn-danger btn-sm m-2" onClick={() => this.props.onDelete(this.props.counter.id)}>Delete</button>

                { this.state.tags.length === 0 && 'please create a new tag' }
                { this.renderTags() }
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-"
        classes += this.state.counterValue === 0 ? "warning" : "primary";
        return classes
    }

    formatCount() {
        const {counterValue} = this.state;
        return counterValue === 0 ? "Zero" : counterValue;
    }

}


export default Counter;