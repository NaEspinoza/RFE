import type { Servicio } from '@/sanity/lib/types'

// Catálogo inicial transcripto del material de Instagram compartido.
// Los importes deben validarse con el negocio antes de publicar.
export const fallbackServicios: Servicio[] = [
  { _id: 'man-1', nombre: 'Semipermanente', categoria: 'manicuria', precio: 5000, descripcion: 'Manicuría semipermanente.', destacado: true },
  { _id: 'man-2', nombre: 'Kapping', categoria: 'manicuria', precio: 8000, descripcion: 'Refuerzo y cuidado de la uña natural.' },
  { _id: 'man-3', nombre: 'Softgel', categoria: 'manicuria', precio: 8000, descripcion: 'Sistema de extensión softgel.' },
  { _id: 'man-4', nombre: 'Esculpidas', categoria: 'manicuria', precio: 8000, descripcion: 'Servicio de uñas esculpidas.' },
  { _id: 'man-5', nombre: 'Capping básico', categoria: 'manicuria', precio: 23000 },
  { _id: 'man-6', nombre: 'Service', categoria: 'manicuria', precio: 20000 },
  { _id: 'man-7', nombre: 'Softgel natural', categoria: 'manicuria', precio: 28000 },
  { _id: 'man-8', nombre: 'Softgel con diseño', categoria: 'manicuria', precio: 30000 },
  { _id: 'man-9', nombre: 'Esculpidas polygel', categoria: 'manicuria', precio: 32000 },
  { _id: 'man-10', nombre: 'Diseño personalizado', categoria: 'manicuria', precio: 35000 },
  { _id: 'man-11', nombre: 'Francesitas', categoria: 'manicuria', precio: 3000, precioTexto: 'Adicional' },
  { _id: 'man-12', nombre: 'Diseños extra (más de dos)', categoria: 'manicuria', precio: 3000, precioTexto: 'Adicional' },
  { _id: 'man-13', nombre: 'Diseños con polvitos', categoria: 'manicuria', precio: 3200, precioTexto: 'Adicional' },
  { _id: 'man-14', nombre: 'Strass', categoria: 'manicuria', precio: 2000, precioTexto: 'Adicional' },
  { _id: 'man-15', nombre: 'Retirado de semipermanente', categoria: 'manicuria', precio: 5000, precioTexto: 'Retirado' },
  { _id: 'man-16', nombre: 'Retirado de kapping', categoria: 'manicuria', precio: 8000, precioTexto: 'Retirado' },
  { _id: 'man-17', nombre: 'Retirado de softgel', categoria: 'manicuria', precio: 8000, precioTexto: 'Retirado' },
  { _id: 'man-18', nombre: 'Retirado de esculpidas', categoria: 'manicuria', precio: 8000, precioTexto: 'Retirado' },

  { _id: 'fac-1', nombre: 'Limpieza facial completa', categoria: 'tratamientos-faciales', precio: 25000, descripcion: 'Limpieza, espátula ultrasónica, máscara, activos y protección solar.', destacado: true },
  { _id: 'fac-2', nombre: 'Peeling', categoria: 'tratamientos-faciales', precio: 30000, descripcion: 'Limpieza facial, exfoliación, peeling, máscara, activos y protección.' },
  { _id: 'fac-3', nombre: 'Tratamiento de patologías', categoria: 'tratamientos-faciales', precio: 35000, descripcion: 'Opciones orientadas a acné, rosácea, puntos de milium y manchas.' },
  { _id: 'fac-4', nombre: 'Microneedling', categoria: 'tratamientos-faciales', precio: 38000, descripcion: 'Limpieza facial, exfoliación, dermapen, activos, máscara y protección.' },
  { _id: 'fac-5', nombre: 'Dermaplaning', categoria: 'tratamientos-faciales', precio: 30000, descripcion: 'Limpieza facial, exfoliación, dermaplaning, activos, máscara y protección.' },
  { _id: 'fac-6', nombre: 'Limpieza Premium', categoria: 'tratamientos-faciales', precio: 30000, descripcion: 'Limpieza, exfoliación, extracciones, activos con electroporador, máscara y fotoprotección.' },

  { _id: 'mas-1', nombre: 'Descontracturante', categoria: 'masajes', precio: 30000, precioTexto: '2 sesiones', descripcion: 'Libera tensiones y alivia dolores musculares.', destacado: true },
  { _id: 'mas-2', nombre: 'Relajante', categoria: 'masajes', precio: 55000, precioTexto: '4 sesiones', descripcion: 'Ayuda a reducir el estrés y recuperar la calma.' },
  { _id: 'mas-3', nombre: 'Linfático', categoria: 'masajes', precio: 85000, precioTexto: '6 sesiones', descripcion: 'Masaje orientado a estimular la circulación linfática.' },
  { _id: 'mas-4', nombre: 'Reductor', categoria: 'masajes', precio: 120000, precioTexto: '8 sesiones', descripcion: 'Masaje corporal orientado al modelado de la figura.' },

  { _id: 'dep-1', nombre: 'Depilación definitiva', categoria: 'depilacion-definitiva', precioTexto: 'Consultar', descripcion: 'Tecnología Alma Soprano Titanium. Tratamientos para mujeres y hombres. Consultá por zonas, evaluación y disponibilidad.', destacado: true },

  { _id: 'pod-1', nombre: 'Belleza de pies', categoria: 'podologia', precio: 30000, descripcion: 'Pulido, exfoliación y crema de parafina.', destacado: true },
  { _id: 'pod-2', nombre: 'Granulomas', categoria: 'podologia', precio: 33000, descripcion: 'Tratamiento específico para su eliminación.' },
  { _id: 'pod-3', nombre: 'Uñas crónicas y bilaterales con anestesia', categoria: 'podologia', precio: 35000, descripcion: 'Tratamiento según evaluación profesional.' },
  { _id: 'pod-4', nombre: 'Onicomicosis con ácido nítrico', categoria: 'podologia', precio: 30000 },
  { _id: 'pod-5', nombre: 'Onicomicosis con láser', categoria: 'podologia', precio: 35000 },
  { _id: 'pod-6', nombre: 'Podología pediátrica y geriátrica', categoria: 'podologia', precioTexto: 'Consultar', descripcion: 'Atención podológica para distintas etapas de la vida.' },
  { _id: 'pod-7', nombre: 'Atención del pie diabético', categoria: 'podologia', precioTexto: 'Consultar', descripcion: 'Consultar disponibilidad y evaluación profesional.' },
  { _id: 'pod-8', nombre: 'Extracción de uñas encarnadas', categoria: 'podologia', precioTexto: 'Consultar' },
  { _id: 'pod-9', nombre: 'Eliminación de helomas (callos)', categoria: 'podologia', precioTexto: 'Consultar' },
]
