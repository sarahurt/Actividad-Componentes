'use client';

import { useState } from 'react';
import { StudentTableRow } from '@/features/students/components/student-table-row';

const students = [
  {
    studentId: '1',
    studentCode: 'A00395120',
    fullName: 'Valeria Cifuentes',
    program: 'Ingeniería Telemática',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96',
    status: 'active' as const,
  },
  {
    studentId: '2',
    studentCode: 'A00381944',
    fullName: 'Carlos Gómez',
    program: 'Ingeniería de Sistemas',
    avatarUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=96',
    status: 'inactive' as const,
  },
  {
    studentId: '3',
    studentCode: 'A00365211',
    fullName: 'Ana Pérez',
    program: 'Diseño de Medios Interactivos',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96',
    status: 'graduated' as const,
  },
];

/**
 * Demo de la tabla: maneja el clic de "Ver notas" con useState.
 */
export function StudentTableDemo() {
  // Guarda el nombre del estudiante al que se le dio "Ver notas"
  const [selectedStudent, setSelectedStudent] = useState<string | null>(null);

  return (
    <div className="space-y-3">
      <div className="overflow-x-auto rounded-box border border-[#cecfd4] bg-base-100">
        <table className="table table-sm">
          <thead>
            <tr>
              <th>Estudiante</th>
              <th className="hidden sm:table-cell">Programa</th>
              <th>Estado</th>
              <th className="text-right">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <StudentTableRow
                key={student.studentId}
                {...student}
                onViewGradesClick={() => setSelectedStudent(student.fullName)}
              />
            ))}
          </tbody>
        </table>
      </div>
      {selectedStudent && (
        <p className="text-sm text-base-content/70">
          Consultando notas de <span className="font-semibold">{selectedStudent}</span>
        </p>
      )}
    </div>
  );
}
