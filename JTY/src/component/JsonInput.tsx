import React, { useState } from 'react';
import yaml from 'js-yaml';

const JsonToYamlConverter: React.FC = () => {
    const [jsonInput, setJsonInput] = useState<string>('');
    const [yamlOutput, setYamlOutput] = useState<string>('');
    const [error, setError] = useState<string>('');

    const handleJsonChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setJsonInput(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setError(''); // Reset error message

        try {
            // Parse the JSON input
            const jsonData = JSON.parse(jsonInput);
            // Convert JSON to YAML
            const yamlData = yaml.dump(jsonData);
            // Set the YAML output
            setYamlOutput(yamlData);
        } catch (err) {
            // Handle JSON parsing errors
            setError('Invalid JSON input. Please check your syntax.');
            setYamlOutput(''); // Clear YAML output on error
        }
    };

    const handleCopy = () => {
        if (yamlOutput) {
            navigator.clipboard.writeText(yamlOutput)
                .then(() => {
                    alert('YAML copied to clipboard!');
                })
                .catch(err => {
                    console.error('Failed to copy: ', err);
                });
        }
    };

    return (
        <div style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '60px',
            padding: '20px',
            boxSizing: 'border-box',
        }}>
            <h1 style={{ color: 'white' }}>JSON to YAML Converter</h1>
            <div style={{
                display: 'flex',
                gap: '2vh',
                width: '100%',
                justifyContent: 'space-between',
            }}>
                <form onSubmit={handleSubmit} style={{
                    width: '45%',
                    display: 'flex',
                    height: '60vh',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '5px',
                    padding: '10px',
                }}>
                    <textarea
                        value={jsonInput}
                        className="styled-textarea"
                        onChange={handleJsonChange}
                        placeholder="Enter JSON here"
                        style={{
                            color: 'white',
                            width: '100%',
                            height: '100%',
                            backgroundColor: 'black',
                            resize: 'none',
                            padding: '10px',
                            borderRadius: '5px',
                            border: '1px solid #ccc',
                        }}
                    />
                    <br />
                    <button type="submit" style={{
                        padding: '10px 20px',
                        border: 'none',
                        borderRadius: '5px',
                        backgroundColor: '#007BFF',
                        color: 'white',
                        marginTop: '2vh',
                        cursor: 'pointer',
                    }}>Convert</button>
                </form>
                {yamlOutput ? (
                    <div style={{
                        width: '45%',
                        display: 'flex',
                        height: '60vh',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '5px',
                        padding: '10px',
                    }}>
                        <div 
                            style={{
                                width: '100%',
                                height: '100%',
                                border: '1px solid #ccc',
                                borderRadius: '5px',
                                padding: '10px',
                                color: 'white',
                                display: 'flex',
                                flexDirection: 'column',
                                overflowY: 'auto',
                            }}
                        >
                            {error ? <p style={{ color: 'red' }}>{error}</p> : <pre>{yamlOutput}</pre>}
                        </div>
                        <button onClick={handleCopy} style={{
                            padding: '10px 20px',
                            border: 'none',
                            borderRadius: '5px',
                            backgroundColor: '#007BFF',
                            color: 'white',
                            marginTop: '2vh',
                            cursor: 'pointer',
                        }}>Copy</button>
                    </div>
                ) : (
                    <div style={{
                        width: '45%',
                    display: 'flex',
                    height:'60vh',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '5px',
                    padding: '10px',
                    }}>
                        <div 
                        style={{
                            width: '100%',
                            height:'100%',
                            border: '1px solid #ccc',
                            borderRadius: '5px',
                            padding: '10px',
                            color:'white',
                            display:'flex',
                            flexDirection:'column',
                            alignItems:'center',
                            justifyContent:'center'
                        }}
                        >
                        {error ? <p style={{ color: 'red' }}>{error}</p> :<div>Your code will appear here</div>}
                        </div>
                        <button style={{
                        padding: '10px 20px',
                        border: 'none',
                        borderRadius: '5px',
                        backgroundColor: '#007BFF',
                        color: 'white',
                        marginTop:'2vh',
                        cursor: 'pointer',
                         }} >Copy</button>
                        </div>
                )}
    
            </div>
        </div>
    )
}
export  default JsonToYamlConverter