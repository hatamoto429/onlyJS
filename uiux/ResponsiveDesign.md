# Responsive Design Principles

Responsive design ensures your application works well across a variety of devices and screen sizes.

### 1. **Fluid Layouts**
   - Use percentages or `em`/`rem` units instead of fixed pixel values to allow layouts to adjust based on screen size.

### 2. **Media Queries**
   - Use CSS media queries to adjust styles based on screen size. For example:
   ```css
   @media (max-width: 768px) {
     /* Styles for mobile */
   }