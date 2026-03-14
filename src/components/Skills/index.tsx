import { skillCategories } from '../../data/skills';
import './skills.css';

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="skills__inner">
        <h2 className="skills__heading">Skills</h2>
        <div className="skills__categories">
          {skillCategories.map(({ category, skills }) => (
            <div key={category} className="skills__group">
              <h3 className="skills__category">{category}</h3>
              <ul className="skills__list">
                {skills.map(({ name }) => (
                  <li key={name} className="skills__tag">
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
