"use client";

import { useState } from "react";

export function useDepartmentsSelection(initialDepartment = "Tecnologia") {
  const [selectedDepartment, setSelectedDepartment] = useState(initialDepartment);

  const isDepartmentActive = (departmentName: string) => selectedDepartment === departmentName;

  return {
    selectedDepartment,
    setSelectedDepartment,
    isDepartmentActive,
  };
}