# RESTful API Activity - Sean Russel S. Salcedo

## Best Practices Implementation

**1. Environment Variables:**  
- **Why did we put `BASE_URI` in `.env` instead of hardcoding it?**  
- Answer: We use environment variables like `BASE_URI` so sensitive info (like database URIs, API keys, or server URLs) is not exposed in the code. It also allows the app to switch between development, testing, and production without changing the code.

**2. Resource Modeling:**  
- **Why did we use plural nouns (e.g., `/dishes`) for our routes?**  
- Answer: Plural nouns represent collections of resources in RESTful APIs. For example, `/dishes` is a collection, while `/dishes/:id` is a single item. This makes the routes easy to read and consistent.

**3. Status Codes:**  
- **When do we use `201 Created` vs `200 OK`?**  
  - `201 Created`: When a new resource is successfully created (POST).  
  - `200 OK`: When a resource is successfully retrieved or updated (GET, PUT).  
- **Why return `404` instead of just an empty array or generic error?**  
  - `404 Not Found` tells the client the resource does not exist. It prevents confusion, allows proper error handling, and follows REST standards.

**4. Testing:**  
- ![GET /transactions](screenshots\Screenshot 2026-01-28 133621.png)  

**5. Embedding vs Referencing:**  
- **Why embed tags in transactions?**  
  - Tags like "Emergency" or "Tax-Deductible" belong only to a transaction. Embedding makes it easy to read, update, and query without a separate collection.  
- **Why reference the user?**  
  - Each transaction belongs to a user, and a user can have many transactions. Referencing with `ObjectId` avoids duplicating user data, keeps a clean relationship, and allows populating user info when needed.



## Activity 4

**1. Authentication vs Authorization:**  
- Authentication: Checks who the user is (logging in with email and password).  
- Authorization: Checks what the user can do (like only admins can delete transactions).

**2. Security (bcrypt):**  
- We use bcryptjs to encrypt passwords before saving. This keeps passwords safe even if someone hacks the database.

**3. JWT & Protect Middleware:**  
- The protect middleware checks the token sent by the user.  
- It makes sure the token is valid and finds out which user is making the request, so the server can allow or block actions based on their role.