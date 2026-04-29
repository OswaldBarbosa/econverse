"use client";

import { Icon } from "@/components/icons";
import { DEPARTMENTS } from "@/constants";
import { useDepartmentsSelection } from "@/hooks/useDepartmentsSelection";
import styles from "./DepartmentsSection.module.scss";

export function DepartmentsSection() {
  const { isDepartmentActive, setSelectedDepartment } = useDepartmentsSelection();

  return (
    <section className={styles.departments} aria-label="Departamentos">
      {DEPARTMENTS.map((department) => {
        const DepartmentIcon = Icon[department.iconKey];
        const isActive = isDepartmentActive(department.name);
        const isTechnology = department.name === "Tecnologia";
        const cardClassName = `${styles.departments__card} ${isActive ? styles.departments__cardPrimary : styles.departments__cardSecondary
          }`;
        const iconClassName = `${styles.departments__icon} ${isTechnology
          ? isActive
            ? styles.departments__iconActiveRaw
            : styles.departments__iconInactiveRaw
          : isActive
            ? styles.departments__iconActive
            : ""
          }`;
        const nameClassName = `${styles.departments__name} ${isActive ? styles.departments__nameActive : ""}`;

        return (
          <article key={department.name} className={styles.departments__item}>
            <button
              type="button"
              className={cardClassName}
              onClick={() => setSelectedDepartment(department.name)}
              aria-pressed={isActive}
              aria-label={`Selecionar departamento ${department.name}`}
            >
              <div className={styles.departments__iconBox}>
                <DepartmentIcon className={iconClassName} aria-hidden="true" />
              </div>
            </button>
            <h2 className={nameClassName}>{department.name}</h2>
          </article>
        );
      })}
    </section>
  );
}