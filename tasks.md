# AIFordable Groceries Development Tasks

## Phase 0: Foundation & Familiarization ✅
**Status**: Ready to begin  
**Objective**: Establish stable development environment and understand demo architecture

### Tasks:
- [ ] **P0.1**: Run existing OpenAI demo locally and confirm functionality
- [ ] **P0.2**: Study agent definition patterns in `src/app/agentConfigs/`
- [ ] **P0.3**: Understand tool definition and integration
- [ ] **P0.4**: Analyze WebSocket connection handling in hooks
- [ ] **P0.5**: Document message flow and streaming events

**Success Metric**: Explain end-to-end data flow and run demo reliably

---

## Phase 1: Core Backend Logic Implementation
**Status**: Pending Phase 0 completion  
**Objective**: Replace generic demo tools with AIFordable Groceries business logic

### Tasks:
- [ ] **P1.1**: Implement `getRecipes()` nutrition tool with mocked data
  - Function signature: `getRecipes(preferences: {dietary_needs: string[], nutrient_focus: string[], cook_time_max_minutes: number})`
  - Return 2-3 hardcoded recipes with `prep_time`, `cook_time`, `tools_needed`
  - Define tool schema for OpenAI agent

- [ ] **P1.2**: Implement `getGroceryPrices()` commerce tool
  - Function signature: `getGroceryPrices(ingredients: string[], location: string)`
  - Mock price data for 2+ fictional stores

- [ ] **P1.3**: Implement `optimizeCart()` function
  - Function signature: `optimizeCart(priceData: PriceData, budget: number)`
  - Simple heuristic showing multi-store cost optimization
  - Clear output showing which items from which store

- [ ] **P1.4**: Integrate custom tools into agent definition
  - Remove default demo tools
  - Add new tools to agent configuration
  - Test tool calling sequence

**Success Metric**: Agent responds to "Find me cheap vegan meals under 30 minutes" by calling correct functions in sequence

---

## Phase 2: Frontend Transformation
**Status**: Pending Phase 1 completion  
**Objective**: Transform generic UI into branded AIFordable Groceries interface

### Tasks:
- [ ] **P2.1**: Apply AIFordable Groceries branding
  - Implement color palette and typography
  - Add logo and update component text
  - Create branded theme

- [ ] **P2.2**: Create RecipeCard component
  - Display recipe image, title, key details
  - Include prep_time, cook_time, tools_needed placeholders
  - Rich formatting for recipe presentation

- [ ] **P2.3**: Create OptimizedCart component
  - Show shopping list grouped by store
  - Display individual prices and totals
  - Clear multi-store visualization

- [ ] **P2.4**: Add preference input controls
  - Create buttons for common preferences (High Protein, Quick Meals, Vegetarian)
  - Implement hybrid input that pre-populates text input
  - Smooth UX for preference selection

**Success Metric**: Branded, intuitive interface showing formatted recipes and multi-store shopping lists

---

## Phase 3: End-to-End Integration
**Status**: Pending Phase 2 completion  
**Objective**: Create seamless user flow demonstrating full value proposition

### Tasks:
- [ ] **P3.1**: Craft detailed system prompt
  - Define agent persona and workflow
  - Specify core interaction patterns
  - Set clear behavioral guidelines

- [ ] **P3.2**: Integrate live APIs
  - Replace mocked nutrition data with real API (Spoonacular/Edamam)
  - Integrate MealMe API for grocery prices
  - Handle API errors gracefully

- [ ] **P3.3**: Implement real-time status updates
  - Stream status messages during API calls
  - Show "Finding best prices..." type messages
  - Create engaging, transparent experience

- [ ] **P3.4**: Define and perfect Golden Path
  - User requests $100 budget, high-protein vegan meals for 2 people
  - Agent presents 3 recipe options
  - User selects one → Agent returns optimized cart from 2 stores totaling $92.50
  - Perfect this single demonstration flow

**Success Metric**: Stakeholder can use application without instruction to generate cost-optimized grocery list

---

## Current Status: Ready for Phase 0
**Next Action**: Begin P0.1 - Run existing OpenAI demo locally

## Environment Setup ✅
- API Keys: Anthropic configured in `.env`
- PRD: Created in `.taskmaster/docs/prd.txt`
- Project Structure: Ready in `openai-realtime-agents/`