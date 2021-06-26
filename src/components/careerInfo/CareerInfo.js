import React from 'react';
import './careerInfo.css';

export default function CareerInfo() {
    return (
        <div className="careerInfo">
             <h5>CONTACT</h5>
            <div className="contact">
                <div className="contactItem">Sreelekha V S</div>
                <div className="contactItem">+91-7358468893</div>
                <div className="contactItem">
                <a href="mailto:sreesrini72@gmail.com">sreesrini72@gmail.com</a>
                </div>
                <div className="contactItem">East Tambaram, Chennai</div>
            </div>
            <h5>SUMMARY</h5>
            <div className="summary">
                Posseses 6+ years of experience in IT. Transitioning to React JS Developer Role
            </div>
            <h5>DESIGNATION</h5>
            <div className="designation">
                <div className="designationList">
                    <div className="designationItem"><b>Senior Software Engineer</b> at <b>CGI Group Inc, Chennai</b> - Dec 2019 to Till Date</div>
                    <div className="designationItem"><b>Associate</b> at <b>Cognizant, Chennai</b> - Feb 2015 - Dec 2019</div>
                </div>
            </div>
            <h5>TECHNICAL SKILLS</h5>
            <table className="technicalSkills">
                <tr>
                    <td className="technicalSkillsheader">Languages</td>
                    <td>:</td>
                    <td>Javascript, C#, SQL</td>
                </tr>
                <tr>
                    <td className="technicalSkillsheader">Frontend</td>
                    <td>:</td>
                    <td>HTML/CSS, React JS, Material UI Framework</td>
                </tr>
                <tr>
                    <td className="technicalSkillsheader">Technologies</td>
                    <td>:</td>
                    <td>SharePoint 2013/Online & ASP.NET</td>
                </tr>
                <tr>
                    <td className="technicalSkillsheader">Backend</td>
                    <td>:</td>
                    <td>SQL Server</td>
                </tr>
                <tr>
                    <td className="technicalSkillsheader">Version Control Software</td>
                    <td>:</td>
                    <td>TFS, GitHub</td>
                </tr>
                <tr>
                    <td className="technicalSkillsheader">Dev Tools</td>
                    <td>:</td>
                    <td>VS Code, Visual Studio, SQL Server Management Studio</td>
                </tr>
            </table>
            <h5>CERTIFICATION</h5>
            <div className="certification">
                React Nanodegree Program by Udacity - Ongoing
            </div>
            <h5>ROLES & RESPONSIBILITIES</h5>
            <div className="roles">
                <ul>
                    <li><i className=" bulletPoint fa fa-solid fa-circle"></i>Online Webpart Development</li>
                    <li><i className=" bulletPoint fa fa-solid fa-circle"></i>Rebranding an existing application to modern SharePoint sites</li>
                    <li><i className=" bulletPoint fa fa-solid fa-circle"></i>Modern Pages Branding & Customization</li>
                    <li><i className=" bulletPoint fa fa-solid fa-circle"></i>Worked with 2010 & 2013 SharePoint Designer workflows</li>
                    <li><i className=" bulletPoint fa fa-solid fa-circle"></i>Provided solutions to End User as a Consultant</li>
                    <li><i className=" bulletPoint fa fa-solid fa-circle"></i>Worked in CSOM scripts, JSOM, SharePoint API</li>
                    <li><i className=" bulletPoint fa fa-solid fa-circle"></i>Issue analysis, Handling Bug Fixes and CRs in Production</li>
                    <li><i className=" bulletPoint fa fa-solid fa-circle"></i>Worked in Bug fixes & CRs</li>
                </ul>
            </div>
            <h5>EDUCATION</h5>
            <div className="education">
                2014 Pass out B.E., ECE – Dhanalakshmi Srinivasan College of Engineering and Technology, Chennai
            </div>
        </div>
    )
}
