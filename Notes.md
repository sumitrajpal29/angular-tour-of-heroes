## Synchronous and Asynchronous requests

//making this function asynchronous using RxJs library symbols Observable and of.  
  ```ts
  //into hero.service.ts
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
    }


    //into heroes.component.ts
    //This is for getting heroes data from heroService asynchronously
    this.heroService.getHeroes().subscribe(heroes=>this.heroes=heroes);
  ```

  ## Router outlet
//add router outlet to app.component.html and you can also add link of /heroes component
```html
<h1>{{title}}</h1>
<nav>
    <a href="/heroes">Heroes</a>
</nav>
<router-outlet></router-outlet>
<app-messages></app-messages>
```

## Redirect to dashboard
//Adding this line to route array it will redirect given path(' ') to given redirectTo('/dashboard'), if path string is fully matching in address bar.
```java
{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
```
