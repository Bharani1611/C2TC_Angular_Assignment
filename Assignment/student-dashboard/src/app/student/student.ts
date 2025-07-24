import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReversePipe } from '../reverse-pipe';

interface StudentData {
  name: string;
  course: string;
  age: number;
  fees: number;
  joiningDate: Date;
  isActive: boolean;
}

@Component({
  selector: 'app-student',
  imports: [FormsModule, CommonModule, ReversePipe],
  templateUrl: './student.html',
  styleUrl: './student.css',
})
export class Student {
  // Single student object
  student: StudentData = {
    name: 'John Doe',
    course: 'Computer Science',
    age: 22,
    fees: 125000,
    joiningDate: new Date('2024-01-15'),
    isActive: true,
  };

  // Multiple students for the bonus ngFor feature
  students: StudentData[] = [
    {
      name: 'John Doe',
      course: 'Computer Science',
      age: 22,
      fees: 125000,
      joiningDate: new Date('2024-01-15'),
      isActive: true,
    },
    {
      name: 'Jane Smith',
      course: 'Information Technology',
      age: 21,
      fees: 120000,
      joiningDate: new Date('2024-02-20'),
      isActive: false,
    },
    {
      name: 'Mike Johnson',
      course: 'Software Engineering',
      age: 23,
      fees: 135000,
      joiningDate: new Date('2023-12-10'),
      isActive: true,
    },
  ];

  // Editable name for two-way binding
  editableName: string = this.student.name;

  // Method to toggle student status
  toggleStatus(): void {
    this.student.isActive = !this.student.isActive;
  }

  // Method to toggle status for multiple students
  toggleStudentStatus(student: StudentData): void {
    student.isActive = !student.isActive;
  }

  // Method to update student name
  updateStudentName(): void {
    this.student.name = this.editableName;
  }
}
