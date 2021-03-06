# Spring
- Java Framework, manage and facilitate the building of enterprise level applications through Inversion of Control achieved with dependency injection.
- Inversion of Control - give up control over making our own objects ( controllers, daos, service layers) we are going to let spring make them.
- Dependency Injection - Spring will take our dependencies, that it already manages and link them together in a process called wiring.
  - Dependency - Some object B that and object A needs to work. 
- Spring makes our controller object A, it also makes our service object B. Object A needs an object B for it to run. Spring through a process called wiring can give its object B to and its object A.
- We configure spring and all of the objects it manages in an xml file. beans.xml
- The objects we let spring manage are called spring beans.
- Benefits of IoC
  - Seperate concerns. 
  - Loosely Coupled Code. (Use ineterfaces to define the behaviour of our spring beans)
  - Code reusability/ avoid code duplication. 
  - Rely on interfaces/contracts/behaviour instead of the implementation. 
- Downsides of IoC
  - Introduce complexity. (It makes it harder for us to think about the problems)
  - Errors, are much harder to trace. Because spring is incharge of making and executing our objects and that requires a ton of object that make up spring. This means stack traces can be hundreds of lines long.
  - We don't have control. You will lose some control you used to have. Most of the time, thats fine, but sometimes it can be a challenge.
- IoC container: 
  - holds all the beans, this is going to be an object that is the root of the Spring applicaiton, will contain and manage the lifecycle of all the beans
  - There are two core interfaces for the IoC container:
  - BeanFactory: 
    - the original interface that has virtually only one core function, 
    - it will lazily make all beans regardless of their type
  - ApplicationContext: extends BeanFactory, 
    - newer version, recommended, 
    - it can eagerly instantiate singleton beans, 
    - has automatic bean post processor registration(Don't worry about this too much), 
    - has I18N support Internationalization(18 letters between I and N), support for translations and different regulations
- Spring bean: 
  - objects set up in our xml file for Spring to manage, 
  - they have different scopes and have their own lifecycle with lifecycle hook methods to interact with them
  - Scopes of a Spring bean: Spring core has 2 by default, SpringWeb has another 3
    - Singleton(default): make one single instance of this bean, ever
    - Prototype: make a new copy of this bean everytime it is needed
    - Request: make a new bean on every http request
    - Session: make a new bean for every http session
    - Global session: it deals with portlets(so don't worry about it)
  - Lifecycle of a Spring bean:
    - Instantiation: making the bean
    - Populate Properties: fill up fields with correct objects
    - set Aware functions: setBeanName, setBeanFactory etc.
    - Pre-initailization bean post processor(object): has a method called beanInitialization()
    - Initializing beans(Interface): after propertiesSet()
    - Custom Init method @PostConstruct
    - Bean Post Processor(object): afterInitialization()
    - Bean is finally reafy to use
    - *when closing the bean
    - DisposableBeans(Interface): destroy()
    - custom destroy method @predestroy annotation
- Dependency Injection
    - way for spring to take one object and give to another
    - 3 ways to do this in spring
    - Constructor injection, we pass the dependency in as a param of the constructor and then set some private field to that param
    - Setter injection, we are going to make a setter method and pass in the dependency using that method to set some private field
    - Field injection, spring can place the dependency directly into a private field
    - Interface injection, spring can't do it
    - we shouldn't use this one, field injection, it makes it almost impossible to test. 
    - By convention, constructor is used for required things, setter is used for optional dependencies and field shouldn't be used.
- Wiring
  - the process of connecting to beans to each other.
  - traditionally done in your beans.xml use the beans tags to set up the DI relationship
  - Autowiring, is allowing spring to determine the relationships based on the types of dependencies required.
  - we don't have to use xml, we can use annotations specifically the @AutoWired annotation
  - if their are multiple beans that fit the type, spring will give you an error. 
  - @AutoWired - tells spring to automagically connect our beans. - using reflections
- Sterotype Annotations
  - @Component - generic annotation telling spring, this is a bean
  - @Repository - this does the same thing as component, but it has a different type so other more specific code can target it.
  - @Service - this does the same thing as component, more specific typing
  - @Controller - this make the class a bean, and also tells spring to use this class for calling endpoint methods
  - @RestController - like controller but with a little more specific functionality, it intrinsicially puts @responsebody on every endpoint method.
# Spring Boot
- Opionated Configuration of Spring
- Many people used spring, the discovered they were configuring many things the same way consistantly 
- Convention over Configuration
- Always going to use application context
- never going to use xml config, always annotations or java(special methods to do config stuff)
- embedded tomcat server(tomcat is a web container, and its the most popular)
- classpath for configuration, if its on the classpath, it will set it up.
- for any config you do have to do, use yaml
# Spring MVC
- JEE Architecture (Java enterprise edition)
  - Sevlets
    - Object that is made to recieve an http request object and to return an http response object
    - it gets that request object from a web container and returns the response to the web container
    - The web container is a special designed to parse http reqs into objects and objects into responses
    - The web container we will use, that spring boots uses is Tomcat
    - generally tie servlets to an http endpoint /bears /users/id
    - in servlets we also have the front controller pattern
    - in this case, there is only one kind of servlet, and that servlet basiaclly has a massive switch statement for all the possible the endpoints
    - and then in each case it calls an appropriate method on a controller object to build the response
- Spring MVC uses the front controller pattern.
  - it dispatches all requests to one servlet. (50 different threads, all with that same servlet)
  - That servlet then looks at a special spring managed handler mapping (table) to determine what method to run
  - go back to servlet and the servlet know correct method to call
  - then controller method, service method, dao method, return to service, return to controller
  - then controller returns to servlet a model and view
  - then servlet will use the view from controller and go to the view resolver, which will then build the view
  - then the servlet can grab the view and return it with the model
  - When following Rest standards, we don't return a view, just a model, so then the dispatcher servlet can skip the view resolving steps 
- Spring MVC Annotations
  - @Controller
  - @RestController - puts @ResponseBody above every method
  - @RequestMapping - this is going to allow us to match paths to methods, spring uses these annotations to build the handler mapping table
  - @GetMapping @PostMapping @PutMapping @PatchMapping @DeleteMapping
  - @RequestBody - the request will have a body it needs to be passed in and parsed
  - @ResponseBody - there is no view, the response is just the object returned
  - @PathVariable - to get a variable from the path,  /users/:id
  - @RequestParam - to get anything in path marked by question mark /user?name=Sam
# Spring Data
  - Not a module, it is a subset of spring ORM.
  - It is a project that is designed to make sql even easier than orm
  - it still requires properly built ORM models, but it can generate the sql for queries in a new exciting way
  - Its built on top of hibernate, which is on top of JDBC
  - we can still use HQL, and maybe sql if you are crazy
  - still have jpa annotations
  - still have same object state and hibernate caching
  - we are going to use the interface JpaRepository<T,I>
  - this interface takes in a Model Type, and the type of the primary key (mostly Integer)
  - we can write custom queries in this interface, using the @query annotation and then providing hql
  - the method names in the interface, can also auto generate queries
  - We do not have to implement the interface to get a working dao...
  - FUNCTIONS WE GET
    - getOne(id) 
    - findById(Id) returns an Optional special object that is null or success
    - findAll()
    - save(T obj)//new and update
    - delete(T obj)
    - flush() make the cache update the database
  - FUNCTIONS WE CAN MAKE
    - make functions by the method name
      - findByUsernameAndPassword(String username, string password)
    - we can use @Query with HQL
      - @Query("FROM Users WHERE name = :name")
      - use sql with @Query("sql string", nativeQuery = true)
