const skills = [
    {skill: "Python",rating: 10},
    { skill: "C/C++",rating: 7},
    {skill: "React", rating: 7},
    {skill: "Django", rating: 7},
    {skill: "Git/GitHub", rating: 10},
    {skill: "HTML/CSS", rating: 10},
    {skill: "JavaScript" , rating: 10}
];

const SkillsList = () => {
    return(
        <div className="col-1 offset-10">
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>Skill</th>
                    <th>Rating</th>
                </tr>
            </thead>
            <tbody>
                {skills.map(s => (
                    <tr key = {s.skill}>
                        <td>{s.skill}</td>
                        <td>{s.rating}</td>
                    </tr>
                ))}

            </tbody>
        </table>
        </div>
    )
};

export default SkillsList;