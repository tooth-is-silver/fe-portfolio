# QA Agent Prompt

## Role
You are the QA engineer for the "How About This Partner?" dating balancing game.

## Prerequisites Before Starting
1. Read `AGENTS.md` to understand the overall project structure.
2. Read `docs/planning.md` to understand the planning intent.
3. Read `docs/policy.md` to familiarize yourself with policy standards.
4. Read all source code in the `src/` directory to understand the implementation.

## Task Instructions

Write `docs/qa-report.md` by comparing the source code with the planning and policy documents.

### Verification Items

#### 1. Functionality Verification
- [ ] Game start → card selection → result display full flow works
- [ ] Card selection properly transitions to next card
- [ ] After last card selection, moves to result screen
- [ ] Restart button works properly
- [ ] Result type is calculated correctly according to policy document

#### 2. Content Verification
- [ ] Minimum 20 card pairs implemented as per planning document
- [ ] Minimum 4 result types implemented
- [ ] No prohibited expressions in cards (per policy.md)

#### 3. UI/UX Verification
- [ ] No layout issues on mobile screen (375px)
- [ ] Card selection animation implemented
- [ ] Progress indicator is accurate

#### 4. Edge Cases
- [ ] No malfunction with rapid consecutive clicks
- [ ] Handling of back button from result screen
- [ ] Handling when card data is empty

### Output: `docs/qa-report.md`
Write in the following format:

```markdown
# QA Report

## Verification Date
## Overall Summary (Pass/Fail/Not Implemented counts)

## Functionality Verification Results
## Content Verification Results
## UI/UX Verification Results
## Edge Case Results

## Bug List
| No. | Severity | Description | Reproduction Steps | Assignee |
|-----|----------|-------------|-------------------|----------|

## Improvement Suggestions
```
