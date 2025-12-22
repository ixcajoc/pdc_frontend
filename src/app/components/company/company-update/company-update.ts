import { Component, inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-company-update',
  imports: [],
  templateUrl: './company-update.html',
  styleUrl: './company-update.css'
})
export class CompanyUpdateComponent {

  // route: ActivatedRoute = inject(ActivatedRoute);
  // teamForm: FormGroup;
  // teamData: any = {};


  // constructor(
  //   private fb: FormBuilder,
  //   private teamService: TeamService,
  //   private messageService: MessageService,
  //   private userService: UserService,
  //   private router: Router,

  // ) 
  // {
  //   this.teamForm = this.fb.group({
  //     nombre: ['', Validators.required],
  //     nombre_corto: ['', Validators.required],
  //     logo_url: [''],
  //     color_principal: ['#000000', Validators.required],
  //     color_secundario: ['#ffffff', Validators.required],
  //     fecha_fundacion: ['', Validators.required],
  //     estadio: ['', Validators.required],
  //     entrenador: ['', Validators.required],
  //     id_usuario_responsable: ['', Validators.required]
  //   });
  // }

  // ngOnInit(){
  //   this.getAllCoaches()
  //   this.getAllUsers()
  //   this.getTeamById()
  // }

  // getTeamById() {
  //   const teamId = this.route.snapshot.params['teamId'];

  //   this.teamService.getTeamByid(teamId).subscribe({
  //     next: (response)=> {
  //       console.log(response.data)
  //       this.teamData = response.data;

  //       const fechaCompleta = this.teamData.fecha_fundacion;
  //       const fechaFormateada = fechaCompleta.split("T")[0];

  //       this.teamForm.patchValue({
  //         nombre: this.teamData.nombre,
  //         nombre_corto: this.teamData.nombre_corto,
  //         // logo_url: this.teamData.logo_url,
  //         color_principal: this.teamData.color_principal,
  //         color_secundario: this.teamData.color_secundario,
  //         // fecha_fundacion: this.teamData.fecha_fundacion,
  //         fecha_fundacion: fechaFormateada, // <-- si necesitas formatear la fecha
  //         estadio: this.teamData.estadio,
  //         entrenador: this.teamData.entrenador,
  //         id_usuario_responsable: this.teamData.id_usuario_responsable
  //       });

  //     },
  //     error: (error) => {console.log(error)}
  //   });
  // }


  // updateTeam(){

  //   if (this.teamForm.invalid) {
  //     this.teamForm.markAllAsTouched();
  //     return;
  //   }
  //   let editedTeam = {
  //     nombre: this.teamForm.value.nombre ?? '',
  //     nombre_corto: this.teamForm.value.nombre_corto ?? '',
  //     logo_url: this.teamForm.value.logo_url ?? '',
  //     color_principal: this.teamForm.value.color_principal ?? '',
  //     color_secundario: this.teamForm.value.color_secundario ?? '',
  //     fecha_fundacion: this.teamForm.value.fecha_fundacion ?? '',
  //     estadio: this.teamForm.value.estadio ?? '',
  //     entrenador: this.teamForm.value.entrenador ?? '',
  //     id_usuario_responsable: this.teamForm.value.id_usuario_responsable ?? ''
  //   };

  //   console.log(editedTeam);

  //   this.teamService.updateTeam(this.teamData.id_equipo, editedTeam).subscribe({
  //     next: (response)=> {
  //       // alert(`Felicidades: ${response}`)
  //       this.messageService.successAlert()
  //       this.router.navigate(['/dashboard1/panel-team']);
  //     },
  //     error: (error) => {
  //       // alert(`Algo salio mal: ${error}`);
  //       this.messageService.errorAlert(error)
  //     }
  //   });
    
  // }

}
