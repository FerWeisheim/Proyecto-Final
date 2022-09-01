![modeloBase](https://user-images.githubusercontent.com/94560950/187820684-c2cffb70-c072-4e41-bfad-e1b688e8b4c4.png)
# PortafolioArgentinaPrograma

Este Proyecto se creo Utilizando [Angular CLI](https://github.com/angular/angular-cli) version 13.2.3, SpringBoot y Mysql.

La base de datos se creo en Java (Netbeans). En las partes que se uso la cardinalidad fueron en las tablas de ROL,USUARIO. En las demas tablas no se aplico cardinalidad y quedo como NoSQL. 

Aca dejo algunos EndPoint:

@GetMapping("tecnologia/traer")
(Listamos todas las tecnologias de front-end)

@PostMapping("tecnologia/crear")
(Crea una nueva tecnologia de front-end)

@DeleteMapping("tecnologia/borrar/{id}")
(Borra por ID una tecnologia de front-end)

@PutMapping({"tecnologia/editar/{id}"})
(Actualiza por ID una tecnologia de front-end

@GetMapping("tecnologia/traer/{id}")
(Trae una tecnologia de front-end por ID)


