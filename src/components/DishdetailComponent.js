import React, { Component } from 'react';

import { Card, CardBody, CardText, CardTitle } from 'reactstrap';

class DishDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }



    renderComments(dish) {  
        if( dish != null ) {
            const details = dish.comments.map( (comments) => {
            return( 
                <div key={comments.id}>
                <Card>
                    <CardBody>
                                <CardTitle>{comments.comment}</CardTitle>
                                <CardText>-- {comments.author}, 
                                {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comments.date)))}
                                </CardText>
                            </CardBody>
                </Card>
                </div>
            );
        }
                
            );
            return(
                <div className="col-12 col-md5 m-1">
                    <h4>Comments</h4>
                    {details}
                </div>
            );
            
    }else{
            return(
                <div></div>
            );
              
        }    
    }
    
    
    render() {
        return (
            <div className="container">
                <div className="row ">
                  <div>
                    {this.renderComments(this.props.comment)}
                  </div>
                </div>
            </div>
        );
    }

    
}

export default DishDetail;