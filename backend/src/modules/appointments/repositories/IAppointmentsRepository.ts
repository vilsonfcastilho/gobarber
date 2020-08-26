import Appointment from '../infra/typeorm/entities/Appointment';

import ICreateAppointmnetDto from '../dtos/ICreateAppointmentDto';

export default interface IAppointmentsRepository {
  create(data: ICreateAppointmnetDto): Promise<Appointment>;
  findByDate(date: Date): Promise<Appointment | undefined>;
}
