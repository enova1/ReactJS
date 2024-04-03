// Employee.jsx


import React, { useState } from "react";
import { Employees } from "./models/Employees";
import { EmployeePhones } from "./models/EmployeePhones";
import { EmployeeAddresses } from "./models/EmployeeAddresses";

function Employee() {
    // State variables to store form data
    const [employeeData, setEmployeeData] = useState(Employees);
    const [phoneData, setPhoneData] = useState(EmployeePhones);
    const [addressData, setAddressData] = useState(EmployeeAddresses);
    const [submissionStatus, setSubmissionStatus] = useState(null); // null = initial, true = success, false = failure
    const [responseData, setResponseData] = useState(null); // State variable to store response data



    // Handle form input changes
    const handleInputChange = (event, type) => {
        const { name, value } = event.target;
        if (type === "employee") {
            setEmployeeData({ ...employeeData, [name]: value });
        } else if (type === "phone") {
            setPhoneData({ ...phoneData, [name]: value });
        } else if (type === "address") {
            setAddressData({ ...addressData, [name]: value });
        }
    };

    // Handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();

        // Prepare the data object to send to the API
        const formData = {
            employeeId: 0,
            firstName: employeeData.FirstName,
            lastName: employeeData.LastName,
            hireDate: new Date(employeeData.HireDate).toISOString(),
            employeePhones: [phoneData],
            employeeAddresses: [addressData]
        };

        try {
            // Send a POST request to the API endpoint
            const response = await window.fetch("v1/employee", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            // Check if the request was successful
            if (response.ok) {
                // Data successfully submitted
                const data = await response.json();
                setSubmissionStatus(true);
                setResponseData(data);
                console.log("Form data submitted to the API successfully!");
            } else {
                // Error handling if the request failed
                setSubmissionStatus(false);
                console.error("Failed to submit form data to the API.");
            }
        } catch (error) {
            setSubmissionStatus(false);
            console.error("An error occurred while submitting form data:", error);
        }

        console.log("Submitted data:", formData);
    };

    // Function to refresh the page
    const handleRefresh = () => {
        window.location.reload();
    };

    return (
        <div>
            <h2>Employee Creation Form</h2>
            <p>This component demonstrates data submition to an external API with response.</p>
            {/* Display success or failure message based on submission status */}
            {submissionStatus === true && <p>Form submitted successfully!
                <br />Example result data Not Submitted data.<br />
                <button onClick={handleRefresh}>Add Another Employee?</button>
                {/* Display response data */}
                {responseData && (
                    <div>
                        <h2>WebApi Response Data</h2>
                        <pre>{JSON.stringify(responseData, null, 2)}</pre>
                    </div>
                )}
            </p>}
            {submissionStatus === false && <p>Form submission failed. Check that the WebApi is running and please try again.</p>}

            {/* Render form only if submissionStatus is not true */}
            {submissionStatus !== true && (
                <form onSubmit={handleSubmit} style={{ width: '400px', margin: 'auto' }}>
                    <table>
                        {/* Employee Information */}
                        <tr>
                            <td>
                                <label>First Name:</label>
                            </td>
                            <td>
                                <input type="text" name="FirstName" value={employeeData.FirstName} onChange={(e) => handleInputChange(e, 'employee')} required />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Last Name:</label>
                            </td>
                            <td>
                                <input type="text" name="LastName" value={employeeData.LastName} onChange={(e) => handleInputChange(e, 'employee')} required />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Hire Date:</label>
                            </td>
                            <td>
                                <input type="date" name="HireDate" value={employeeData.HireDate} onChange={(e) => handleInputChange(e, 'employee')} required />
                            </td>
                        </tr>

                        {/* Phone Information */}
                        <tr>
                            <td>
                                <label>Phone Type:</label>
                            </td>
                            <td>
                                <input type="text" name="PhoneType" value={phoneData.PhoneType} onChange={(e) => handleInputChange(e, 'phone')} required />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Phone Number:</label>
                            </td>
                            <td>
                                <input type="text" name="PhoneNumber" value={phoneData.PhoneNumber} onChange={(e) => handleInputChange(e, 'phone')} required />
                            </td>
                        </tr>

                        {/* Address Information */}
                        <tr>
                            <td>
                                <label>Address 1:</label>
                            </td>
                            <td>
                                <input type="text" name="Address1" value={addressData.Address1} onChange={(e) => handleInputChange(e, 'address')} required />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Address 2:</label>
                            </td>
                            <td>
                                <input type="text" name="Address2" value={addressData.Address2} onChange={(e) => handleInputChange(e, 'address')} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>City:</label>
                            </td>
                            <td>
                                <input type="text" name="City" value={addressData.City} onChange={(e) => handleInputChange(e, 'address')} required />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>State:</label>
                            </td>
                            <td>
                                <input type="text" name="State" value={addressData.State} onChange={(e) => handleInputChange(e, 'address')} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Zip Code:</label>
                            </td>
                            <td>
                                <input type="text" name="ZipCode" value={addressData.ZipCode} onChange={(e) => handleInputChange(e, 'address')} required />
                            </td>
                        </tr>
                    </table>

                    {/* Submit Button */}
                    <button type="submit">Submit</button>
                </form>
            )}
        </div>
    );
}

export default Employee;
