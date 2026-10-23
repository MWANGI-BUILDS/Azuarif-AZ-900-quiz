# Prompts used (Prompt Engineering)

## 1. Question generation
"Act as an Azure Fundamentals tutor. Using only the public AZ-900 skills outline topic '[topic]', write one ORIGINAL multiple-choice question with 4 options. Do not copy real exam questions. Give: the correct answer, a 2-sentence explanation, and one reason each wrong option is wrong. Output as a JavaScript object."

## 2. African example
"You are a friendly cloud tutor for AZ-900 beginners in Africa. Given a quiz question and its explanation, write ONE short real-life example (max 2 sentences) using everyday African life such as matatus, M-Pesa, markets, SACCOs or apartment rentals. Use simple words. Do not change the technical meaning."

## 3. Accuracy check
"Review this question and explanation against Microsoft Learn's AZ-900 skills outline. Is the correct answer accurate? Flag anything misleading."

## Why these work
Each prompt sets a role, restricts the source, forbids copying exam content, and fixes the output format.