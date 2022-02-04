import React, { Component } from 'react'
import { Card, CardContent, Input, TextareaAutosize, TextField, Typography } from '@material-ui/core';
import formConfig from './form';
import './add-student.scss';

export default class AddStudent extends Component {
    render() {
        return (
            <div style={{ height: "100%" }}>
                <Card>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Add Student
                        </Typography>
                        {
                            formConfig.map(config => {
                                switch (config.type) {
                                    case 'TextareaAutosize':
                                        return (<TextareaAutosize
                                        className="text-area"
                                            margin="normal"
                                            fullWidth
                                            width="100%"
                                            {...config}
                                        />)
                                        break;
                                    default:
                                        return (
                                            <TextField
                                                margin="normal"

                                                fullWidth
                                                {...config}
                                            />
                                        )
                                        break;
                                }
                            })
                        }
                    </CardContent>
                </Card>
            </div>
        )
    }
}
