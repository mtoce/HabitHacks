import React from 'react'

class NewTaskForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {status: 'later',
                    description: '',
                    estimate: '',
                    priority: '',
                    progress: '',
                };
  
      this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
      this.handleStatusChange = this.handleStatusChange.bind(this);
      this.handleEstimateChange = this.handleEstimateChange.bind(this);
      this.handlePriorityChange = this.handlePriorityChange.bind(this);
      this.handleProgressChange = this.handleProgressChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleDescriptionChange(event) {
      this.setState({description: event.target.value});
    }

    handleStatusChange(event) {
      this.setState({status: event.target.value});
    }

    handleEstimateChange(event) {
      this.setState({estimate: event.target.value});
    }

    handlePriorityChange(event) {
      this.setState({priority: event.target.value});
    }

    handleProgressChange(event) {
      this.setState({progress: event.target.value});
    }
  
    handleSubmit(event) {
      alert('Status: ' + this.state.status + 'Description: ' + this.state.description + 'Estimate: ' + this.state.estimate + 'Priority: ' + this.state.priority + 'Progress: ' + this.state.progress);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
            <div className='flex flex-col'>
                <div className='flex justify-start items-center gap-1'>
                    <input type="checkbox" />
                    <label className='-left-full -top-full'>
                        New Task
                        <input type="text" placeholder="New Task" />
                    </label>
                </div>
                <label className='-left-full -top-full'>
                    Additional Notes Here...
                    <textarea value={this.state.description} onChange={this.handleDescriptionChange} />
                </label>
                <div>
                    <label className='-left-full -top-full'>
                        Status
                        <select value={this.state.status} onChange={this.handleStatusChange}>
                            <option value="Later">Later</option>
                            <option value="Next">Next</option>
                            <option value="Started">Started</option>
                            <option value="Waiting">Waiting</option>
                            <option value="Done">Done</option>
                        </select>
                    </label>
                    <label className='-left-full -top-full'>
                        Estimate
                        <select value={this.state.estimate} onChange={this.handleEstimateChange}>
                            <option value="5 minutes">5 minutes</option>
                            <option value="10 minutes">10 minutes</option>
                            <option value="15 minutes">15 minutes</option>
                            <option value="20 minutes">20 minutes</option>
                            <option value="30 minutes">30 minutes</option>
                            <option value="45 minutes">45 minutes</option>
                            <option value="1 hour">1 hour</option>
                            <option value="2 hours">2 hours</option>
                            <option value="4 hours">4 hours</option>
                            <option value="8 hours">8 hours</option>
                            <option value="1 day">1 day</option>
                            <option value="2 days">2 days</option>
                            <option value="3 days">3 days</option>
                            <option value="4 days">4 days</option>
                            <option value="5 days">5 days</option>
                            <option value="7 days">7 days</option>
                        </select>
                    </label>
                    <label className='-left-full -top-full'>
                        Priority
                        <select value={this.state.priority} onChange={this.handlePriorityChange}>
                            <option value="highest">Highest</option>
                            <option value="high">High</option>
                            <option value="Normal">Normal</option>
                            <option value="Low">Low</option>
                            <option value="Lowest">Lowest</option>
                        </select>
                    </label>
                    <label className='-left-full -top-full'>
                        Set Progress
                        <select value={this.state.progress} onChange={this.handleProgressChange}>
                            <option value="10 %">10 %</option>
                            <option value="20 %">20 %</option>
                            <option value="25 %">25 %</option>
                            <option value="30 %">30 %</option>
                            <option value="40 %">40 %</option>
                            <option value="50 %">50 %</option>
                            <option value="60 %">60 %</option>
                            <option value="70 %">70 %</option>
                            <option value="75 %">75 %</option>
                            <option value="80 %">80 %</option>
                            <option value="90 %">90 %</option>
                            <option value="100 %">100 %</option>
                        </select>
                    </label>
                </div>
            <input type="submit" value="Submit" />
          </div>
        </form>
      );
    }
  }

  export default NewTaskForm