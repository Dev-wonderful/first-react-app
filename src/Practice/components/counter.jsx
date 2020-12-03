import React, { Component } from 'react';
import '../bootstrap.css';

class Counter extends Component {


    state = {
        
        tags: ['tag1', 'tag2', 'tag3']
        
    };
    
    
    renderTags() {
        if (this.state.tags.length === 0) return <p>There are no tags!</p>;

        return <ul>{ this.state.tags.map(tag => <li key={tag}>{ tag }</li>) }</ul>
    }

    


    
    render() { 
        console.log('props', this.props)

        return (
            <div>
                <span className={ this.getBadgeClasses() }>{ this.formatCount() }</span>

                <button onClick={() => this.props.onIncrement(this.props.counter) } className="btn btn-secondary btn-sm m-2">Increment</button>

                <button className="btn btn-danger btn-sm m-2" onClick={() => this.props.onDelete(this.props.counter.id)}>Delete</button>

                { this.state.tags.length === 0 && 'please create a new tag' }
                { this.renderTags() }
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-"
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes
    }

    formatCount() {
        const {value} = this.props.counter;
        return value === 0 ? "Zero" : value;
    }

}


export default Counter;