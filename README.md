# RESTful API Activity - Sean Russel S. Salcedo

## Best Practices Implementation

**1. Environment Variables:**
- Why did we put `BASE_URI` in `.env` instead of hardcoding it?
- Answer: We use environment variables like `BASE_URI` so that sensitive information (like database URIs, API keys, or server URLs) is not exposed in the codebase. It also allows the app to easily switch between development, testing, and production environments without changing the source code.

**2. Resource Modeling:**
- Why did we use plural nouns (e.g., `/dishes`) for our routes?
- Answer: Plural nouns represent collections of resources in RESTful APIs, making the routes more intuitive. For example, `/dishes` implies a collection of dish resources, while `/dishes/:id` refers to a single resource. This convention improves readability and consistency.

**3. Status Codes:**
- When do we use `201 Created` vs `200 OK`?
- Answer: 
  - `201 Created` is used when a new resource is successfully created via a POST request.
  - `200 OK` is used for successful retrieval or updates of resources (e.g., GET, PUT requests).
- Why is it important to return `404` instead of just an empty array or a generic error?
- Answer: Returning `404 Not Found` explicitly informs the client that the requested resource does not exist. This helps prevent confusion, ensures proper error handling on the client side, and aligns with RESTful standards.

**4. Testing:**
- ![GET /transactions](screenshots\Screenshot 2026-01-28 133621.png)





I chose to **embed the tags** in transactions because tags like "Emergency" or "Tax-Deductible" are simple, self-contained pieces of data that only belong to a specific transaction. Embedding them directly makes it easy to read, update, and query without needing a separate collection. I chose to **reference the user** because each transaction belongs to a user, and a user can have many transactions. Referencing with an `ObjectId` avoids duplicating user data in every transaction, maintains a clean many-to-one relationship, and allows populating user details when needed.