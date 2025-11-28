class Cita {
  constructor(idCita, fecha, hora, idPaciente, idMedico, idAgenda, Motivado) {
    this.idCita = idCita;
    this.fecha = fecha;
    this.hora = hora;
    this.estado = "Agendada";
    this.idPaciente = idPaciente; 
    this.idMedico = idMedico;
    this.idAgenda = idAgenda;
    this.Motivado = Motivado;
  }

  cancelarCita() {
    this.estado = "Cancelada";
    return(`La cita {this.idCita} fue cancelada.`);
  }

  consultarCita() {
    return(`idCita: {this.idCita}\nFecha: {this.fecha}\nHora: {this.hora}\nEstado: {this.estado}`);
  }
}

// Prueba
const cita1 = new Cita("C001", "2025-12-05", "10:00");
cita1.consultarCita();
cita1.cancelarCita();
cita1.consultarCita();






 