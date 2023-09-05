import java from '../assets/svg/skills/java.svg'
import react from '../assets/svg/skills/react.svg'
import mysql from '../assets/svg/skills/mysql.svg'
import aws from '../assets/svg/skills/aws.svg'

export const achievementData = {
    bio :  "",
    achievements : [
        {
            id : 1,
            title : 'React.js Certification',
            details : 'React.js certifications validate your expertise and showcase your ability to transform businesses with React.js technology.',
            date : 'January, 2023',
            field : ' Web Development',
            image : react
        },
        {
            id : 2,
            title : 'Java Certification',
            details : 'Java certifications validate your expertise and showcase your ability to transform businesses with Java technology.',
            date : 'October, 2022',
            field : 'Software Development',
            image : java
        },
        {
            id : 3,
            title : 'MySQl Certification',
            details : 'MySQL certifications validate your expertise and showcase your ability to transform businesses with MySQL technology.',
            date : 'November, 2022',
            field : 'Database Management',
            image : mysql
        },
        {
            id : 4,
            title : 'AWS Certification',
            details : 'Validate technical skills and cloud expertise to grow your career and business.',
            date : 'July, 2022',
            field : 'Automation',
            image : aws
        }

    ]
}


// Do not remove any fields.
// Leave it blank instead as shown below.

/*

export const achievementData = {
    bio : "",
    achievements : []
}

*/