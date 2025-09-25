# Copilot Instructions for Dvorak Lessons Clone

## Project Overview

This is an interactive web-based clone of "ABCD: A Basic Course in Dvorak" designed to help users learn the Dvorak keyboard layout. The application provides structured lessons and exercises to gradually teach the Dvorak typing system.

## Purpose & Context

- **Target Users**: People learning to type with the Dvorak keyboard layout
- **Educational Goal**: Provide an interactive, progressive learning experience for Dvorak typing
- **Learning Approach**: Based on the established "ABCD: A Basic Course in Dvorak" methodology
- **Usage**: Personal learning tool with potential for broader educational use

## Technical Guidelines

### Code Style & Standards

- Write clean, readable code with meaningful variable and function names
- Use consistent indentation and formatting
- Add comments for complex logic, especially related to keyboard layout mappings
- Follow established conventions for the technology stack used

### Educational Application Considerations

- **User Experience**: Prioritize intuitive, accessible interfaces for learners
- **Progressive Learning**: Structure code to support incremental difficulty increases
- **Keyboard Handling**: Pay special attention to accurate keyboard input detection and mapping
- **Visual Feedback**: Implement clear visual indicators for typing accuracy and progress
- **Dvorak Layout**: Ensure proper mapping between QWERTY and Dvorak key positions

### Performance & Accessibility

- Optimize for smooth typing experience with minimal input lag
- Consider users with different typing abilities and learning speeds
- Implement proper error handling for invalid inputs
- Ensure the application works across different browsers and devices

### Development Practices

- Create modular, testable components
- Implement proper state management for lesson progress
- Use semantic HTML elements for better accessibility
- Provide clear error messages and user guidance
- Consider offline functionality for uninterrupted practice

## Key Features to Support

When implementing or modifying features, keep these core functionalities in mind:

1. **Lesson Structure**: Sequential lessons building from basic to advanced skills
2. **Typing Practice**: Real-time feedback on typing accuracy and speed
3. **Progress Tracking**: Save and display user progress through lessons
4. **Layout Visualization**: Show Dvorak keyboard layout for reference
5. **Statistics**: Track typing speed (WPM), accuracy, and improvement over time
6. **Customization**: Allow users to adjust difficulty, speed, or lesson focus

## Testing Considerations

- Test keyboard input handling thoroughly across different browsers
- Verify accurate character mapping between QWERTY and Dvorak layouts
- Test lesson progression and state persistence
- Ensure responsive design works on various screen sizes
- Validate accessibility features with screen readers and keyboard navigation

## Repository Structure

Maintain clean organization:
- Keep educational content separate from application logic
- Organize lessons in a logical, discoverable structure
- Document any custom keyboard mapping algorithms
- Include clear README with setup and usage instructions